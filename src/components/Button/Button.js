import cn from 'classnames'
import './Button.css'

const Button = ({children, className, ...props}) => {
    return <button className={cn('everything-button', className)} {...props}>
        {children}
    </button>
}

export {Button}