import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";


const News = () => {
    const newses = useLoaderData();
    console.log(newses)
    const { id } = useParams();

    const newsInf = newses.find(news => news._id === id);
    console.log(newsInf)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    {/* <h2 className="text-5xl">News Details</h2>
                    
                    <p className="font-bold">{newsInf.title}</p> */}


                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={newsInf.image_url}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{newsInf.title}</h2>
                            <p>{newsInf.details}</p>
                            <div className="card-actions">
                                <Link to="/">
                                    <button className="btn btn-error text-white"><FaArrowLeft  />
                                    All news in this category</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;