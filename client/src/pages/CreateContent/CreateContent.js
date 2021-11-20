import { useState } from 'react'
import './CreateContent.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Multiselect } from 'multiselect-react-dropdown'





const CreateContent = () => {

    const userName = useSelector(state => state.user.userName)
    const [desc, setDesc] = useState('');
    const [title, setTitle] = useState("")
    const [categories, setCategories] = useState({})
    const [file, setFile] = useState(null)
    let history = useHistory()

    const options = [
        { CategoryOfPost: 'müzik', id: 1 },
        { CategoryOfPost: 'resim', id: 2 },
        { CategoryOfPost: 'felsefe', id: 3 },
        { CategoryOfPost: 'fizik', id: 4 },
        { CategoryOfPost: 'dizi', id: 5 },
        { CategoryOfPost: 'dil', id: 6 }
    ]

 
    

 

  const [data] = useState(options)
    
    

    const onSelect = (data) => {
        console.log(data)
        const catArray = data.map(i => i.CategoryOfPost)
        console.log(catArray)
        setCategories(catArray)
    }




    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            username: userName,
            title,
            categories,
            desc,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post("/upload", data)

            } catch (error) {

            }
        }

        try {
            const res = await axios.post("/posts", newPost)
            history.push("/post/" + res.data._id)

            // window.location.replace("/post/" + res.data._id)
        } catch (error) {

        }
    }



    return (
        <div className="createContent">
            <div className="wrapperForm">


                <div className="editor">
                    <span className="editorPageTitle">
                        YENİ POST OLUŞTUR
                    </span>
                    <form onSubmit={handleSubmit} >

                        {/* Input Post Title */}
                        <input
                            type="text"
                            className="title"
                            name="title"
                            placeholder="Başlık giriniz"
                            onChange={(e) => setTitle(e.target.value)}
                        />


                        {/* Selected Image */}
                        {file && (
                            <img className="uploadImage" src={URL.createObjectURL(file)} alt="" />
                        )}


                        {/* Image Select Button */}
                        <label htmlFor="chooseImage" className="chooseImageLabel">
                            <i class="fas fa-plus"></i>
                            Resim Seçiniz
                        </label>
                        <input
                            type="file"
                            id="chooseImage"
                            className="chooseImageInput"
                            onChange={(e) => setFile(e.target.files[0])}
                        />


                        {/* Category Select Option */}
                        <label className="categoryLabel">Kategori Seçiniz</label>
                        <div className="selectBox">
                            <Multiselect
                               // isObject={false}
                                options={data}
                                onRemove={(e) => {console.log(e)}}
                                onSelect={onSelect}
                                className="multiselect"
                                displayValue="CategoryOfPost"
                            />

                        </div>


                        {/* Editor */}
                        <div className="quillWrapper">
                            <ReactQuill
                                className="quill"
                                theme="snow"
                                value={desc}
                                placeholder="Post metnini giriniz"
                                modules={CreateContent.modules}
                                formats={CreateContent.formats}
                                onChange={setDesc} />
                        </div>

                        {/* Publish Button */}
                        <input className="publishButton" type="submit" value="Publish" />
                    </form>

                </div>
            </div>
        </div>
    )
}

CreateContent.modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ],
}

CreateContent.formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

export default CreateContent
