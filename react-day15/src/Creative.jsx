function Creative({title,description,image,buttonText,onButtonClick}){
    return(
        <div className="creative">
         {image && <img src={image} alt={title} className="img-card"/>}
         <h3>{title}</h3>
         <p>{description}</p>
         {buttonText && (<button onClick={onButtonClick} className="btn-card">{buttonText}</button>)}
        </div>
    );
}
export default Creative;