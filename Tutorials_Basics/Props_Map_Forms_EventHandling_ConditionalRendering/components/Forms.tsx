import { useForm } from "react-hook-form"

const Forms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data: any) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="m-2" type="text" placeholder="Name" id="name" {...register("name", { required: true, maxLength: 20 })} />
            {errors.name && errors.name.type === "required" && <span className="m-2">This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}

            <input className="m-2" type="text" id="email" placeholder="Email" {...register("email", { required: true, maxLength: 30 })}></input>
            {errors.email && errors.email.type === "required" && <span className="m-2">This is required</span>}
            {errors.email && errors.email.type === "maxLength" && <span>Max length exceeded</span>}

            <input className="m-2" type="text" id="age" placeholder="Age" {...register("age", { required: true, maxLength: 30 })}></input>
            {errors.age && errors.age.type === "required" && <span className="m-2">This is required</span>}
            {errors.age && errors.age.type === "maxLength" && <span>Max length exceeded</span>}

            <input className="m-2" type="text" placeholder="Password" id="password" {...register("password", { required: true, maxLength: 30 })}></input>
            {errors.password && errors.password.type === "required" && <span className="m-2">This is required</span>}
            {errors.password && errors.password.type === "maxLength" && <span>Max length exceeded</span>}
            <input type="submit" className="btn m-2"></input>
        </form>
    )
}
export default Forms
