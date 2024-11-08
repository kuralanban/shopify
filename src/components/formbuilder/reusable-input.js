const Input=({name,type,onChange,error,placeholder,classname})=>{
    return (
<div className={classname|| "input-container"}>
<input
name={name}
type={type}
onChange={onChange}
placeholder={placeholder}
/>
{error && <span>{error}</span>}
</div>
    )
}

export default Input;