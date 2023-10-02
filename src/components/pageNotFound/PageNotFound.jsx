import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate();

  return (
    <div className='pageNotFound w-[80%] pt-0 right-0 h-[calc(100%-130px)]  fixed'>
        <section class="page_404">
	    <div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="" class="link_404" onClick={()=>{
            navigate("/");
        }}>Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default PageNotFound
