import React from 'react';
import { useForm } from "react-hook-form";

const AddInfo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <input placeholder="Enter your Name" {...register("name", { required: true })} />
                    <div>
                        {errors.name && <span className="text text-danger">*This field is required</span>}
                    </div>
                </div>
                <div>
                    <input placeholder="Enter your ID" {...register("name", { required: true })} />
                    <div>
                        {errors.name && <span className="text text-danger">*This field is required</span>}
                    </div>
                </div>
                <div>
                    <input placeholder="Enter your Email" {...register("name", { required: true })} />
                    <div>
                        {errors.name && <span className="text text-danger">*This field is required</span>}
                    </div>
                </div>
                <div>
                    <input placeholder="Enter your mobile number" {...register("name", { required: true })} />
                    <div>
                        {errors.name && <span className="text text-danger">*This field is required</span>}
                    </div>
                </div>
                <div>
                    <input placeholder="Enter your District" {...register("name", { required: true })} />
                    <div>
                        {errors.name && <span className="text text-danger">*This field is required</span>}
                    </div>
                </div>


                <input type="submit" />
            </form>
        </div>
    );
};

export default AddInfo;