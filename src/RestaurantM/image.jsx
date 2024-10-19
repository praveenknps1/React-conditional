import Menu from "./disclaimer"

function Image(){
    return (

<>


<div style={{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
<img className="img1" src="https://th.bing.com/th/id/OIP._rTsdRFBYd_7RwuIpTgu9AHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={300} height={220} />
<img className="img2"  src="https://img-global.cpcdn.com/recipes/50f336020393989b/751x532cq70/paneer-biryani-recipe-main-photo.jpg" alt="" width={300} height={220} />
<img className="img3"  src="https://www.ntnews.com/wp-content/uploads/2021/09/nalli2-1024x683.jpg" alt=""  width={300} height={220} />
<img className="img4"  src="https://thewhiskaddict.com/wp-content/uploads/2021/10/IMG_7794-1024x897.jpg" alt="" width={300} height={220}/>
</div>

<Menu/>
</>

    )
}

export default Image