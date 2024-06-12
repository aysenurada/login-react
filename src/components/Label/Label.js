import './Label.css'

const Label = ({children, className, ...props}) => {
    return (
        <label className={('label', className)} {...props}>{children}</label>
    )
}

export {Label}