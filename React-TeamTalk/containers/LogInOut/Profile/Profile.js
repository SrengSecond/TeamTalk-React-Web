import React,{useState,useEffect} from 'react';
import './Profile.css'
import axios from 'axios'
import DepartmentButton from "./DepartmentButton/DepartmentButton";
import {useForm} from "react-hook-form";
import defaultProfilers from '../../../../React-TeamTalk/assets/icon/profile_astronaut.png'

const api = axios.create({
    baseURL:"http://localhost:8000/api/"
})

function Profile(props)
{
    const [baseImage,setBaseImage] = useState("")
    const { register, handleSubmit,getValues,formState:{errors} } = useForm();

    useEffect(() =>
    {
        setBaseImage(defaultProfilers);
    },[])

    const handleChangeImage = async(e) =>
    {
        const file = e.target.files[0]
        console.log(file);

        const base64 = await convertBase64(file)
        setBaseImage(base64)
        console.log(base64);
    }

    const onSubmit = async (data,event) =>
    {
        const file = data.picture[0]
        console.log(data);

        const base64 = await convertBase64(file)
        console.log(base64);
        
        setBaseImage(base64)
        // console.log(event.target.files[0])
    }

/*    const config =
        {
            data:{
                name:"Sunset",
                email:"day"
            }
        }*/

    const requestGet = async () =>
    {
        let response = await api.get('/getSetting/5')
            .then(res => {console.log(res.data)})
    }
    const requestPost = async () =>
    {
        let response = await api.post('/addNew',
            {name:"Jackkob",email:"day2day"}
            )
            .then(res => {console.log(res.data)})
    }
    const requestUpdate = async () =>
    {
        let response = await api.delete('/update')

    }

    const requestSearch = async (searchKey) =>
    {
        let response = await api.get(`/search/${searchKey}`)
            .then(res => {console.log(res.data)})
    }

    const requestDelete = async (id) =>
    {
        let response = await api.delete(`/deleteData/${id}`)
            .then(res => {console.log(res.data)})
            .catch(error=>
            {
                console.log("Err",error);
            })
    }

    const onSubmitData =  (data) =>
    {
        console.log(data)
        // requestPost();
        // requestGet();
        // requestSearch("sun");
        // requestDelete(9);

        /*api.get(`/getSetting/`, /!*{
        // api.get('/getSetting/4', /!*{
                name:"Sunsets",
                email:"days"
            }*!/)
            .then(res => {console.log(res.data)})*/
    }

    const convertBase64 = (file) =>
    {
        return new Promise((resolve,reject) =>
        {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
               resolve(fileReader.result);
            };

            fileReader.onerror =(error) => {
                reject(error);
            };
        });
    };

    return (
        <div className={"profile"}>
            <div className="profile-flex">
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className="top">
                    <h1 className={"Title"}>TeamTalk.</h1>

                    <p className={"description"}>
                        Thank you for your information!
                        You’ve almost done registration,
                        Please fill the optional requirement below to proceed!</p>
                </div>
                    <div className="middle">
                    <div className={"middle-department"}>

                        <label>Department</label>
                        <DepartmentButton name={"ITED"}/>
                        <DepartmentButton name={"BIOD"}/>
                        <DepartmentButton name={"TEED"}/>

                        {/*<label>Department</label>*/}
                        {/*<select placeholder={"Activity"} className={"select-Activity"} id={"first-category"} {...register("department")}>*/}
                        {/*    <option value={1}>BIOD</option>*/}
                        {/*    <option value={2}>ITED</option>*/}
                        {/*    <option value={3}>TTED</option>*/}
                        {/*</select>*/}
                    </div>

                    <h4 className={"label-selection"}>Select Your main 3 Activity</h4>

                    <div className={"middle-category"}>

                        <div className="middle-category-left">

                            <div className={"middle-category-div"}>
                                <label className={"selectLabel"} htmlFor={"first-category"}>1st Activity </label>
                                <select placeholder={"Activity"} className={"select-Activity"} id={"first-category"} {...register("firstActivity")}>
                                    <option value={1}>Assignment</option>
                                    <option value={2}>Lab</option>
                                    <option value={3}>Personal project</option>
                                    <option value={4}>Project practicum</option>
                                    <option value={5}>Research</option>
                                    <option value={6}>School project</option>
                                    <option value={6}>Hobby projects</option>
                                </select>
                            </div>

                            <div className={"middle-category-div"}>
                                <label className={"selectLabel"} htmlFor={"second-category"}>2st Activity</label>
                                <select placeholder={"Activity"} className={"select-Activity"} id={"second-category"} {...register("secondActivity")}>
                                    <option value={1}>Assignment</option>
                                    <option value={2}>Lab</option>
                                    <option value={3}>Personal project</option>
                                    <option value={4}>Project practicum</option>
                                    <option value={5}>Research</option>
                                    <option value={6}>School project</option>
                                    <option value={6}>Hobby projects</option>
                                </select>
                            </div>

                            <div className={"middle-category-div"}>
                                <label className={"selectLabel"} htmlFor={"Third-category"}>3rd Activity</label>
                                <select placeholder={"Activity"} className={"select-Activity"} id={"Third-category"}{...register("thirdActivity")}>
                                    <option value={1}>Assignment</option>
                                    <option value={2}>Lab</option>
                                    <option value={3}>Personal project</option>
                                    <option value={4}>Project practicum</option>
                                    <option value={5}>Research</option>
                                    <option value={6}>School project</option>
                                    <option value={6}>Hobby projects</option>
                                </select>
                            </div>

                        </div>

                        {/*<input*/}
                        {/*    className={"custom-file-input"}*/}
                        {/*    onChange={handleChangeImage}*/}
                        {/*    type="file"*/}
                        {/*    accept={".jpg,.png,.pdf"}*/}
                        {/*/>*/}



                        <div className={"middle-category-right"}>

                            <img className="profileImgPreview" src={baseImage} alt=""/>

                            <div className={"upload-btn-wrapper"}>
                                <button className={"btns"}>Upload</button>
                                <input className={"myfile"}
                                       onChange={handleChangeImage}
                                       type="file"
                                       id="file"
                                       accept={".jpg,.png"}
                                       aria-label="File browser example"/>
                            </div>
                        </div>

                    </div>

                </div>
                    <div className="bottom">
                        <button className={"finishButton"} type="submit">Proceed</button>
                    </div>
                </form>
                {/*<div className="bottom">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="middle-category-right">
                            <input
                                type={"file"}
                                {...register("imageProfile")}
                            />

                            <div className="middle-category-right">
                                <img className={"profile-image"} src={getValues("imageProfile")} alt=""/>
                            </div>
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div>*/}
            </div>
        </div>
    );
}
export default Profile;