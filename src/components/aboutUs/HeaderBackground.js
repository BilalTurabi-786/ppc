import Raect from 'react'

export default function HeaderBackground()
{
    return(
        <>
         <section class="hero-section ptb-100 "
             style={{backgroundImage: "url(img/blue-and-white-milky-way-3214110-scaled.jpg)",backgroundRepeat:' no-repeat',backgroundPosition:'center center',backgroundSize:'cover',height:350}}>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-7">
                    <div class="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                        <h1 class="text-white mb-0">About Us</h1>
                        <br></br>
                        <bold>We Provide Writing Assistance to Help You Get A+ Grades</bold>
                    </div>
                </div>
            </div>
        </div>
    </section>


        </>
    )
}