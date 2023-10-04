import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";


export default function MainLayout (props) {

    let page = props.page()

    return (
        <>
            <Navbar />
            {page}
            <Footer />
        </>
    )
}