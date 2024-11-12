import React {useState, useEffect} from 'react' 6.9k (gzipped; 2.7k)
import CommonSection from "../shared/CommonSection"
import {Container,Row,Col} from 'reactstrap'; 124.3k (gzipped: 33.1k)
import "tours.css";
import SearchBar from '';
import TourCard from '';
import NewsLetter from '';
import TourData  from '';
import { useEffect, useState } from "react"
const Tours =(){
    const [pageCount,setPageCount]=useState(0)
    const [page,setPage]=useState(0)
    return <>
        <CommonSection title={All Tours}
        <section>
            <container>
                <row>
                    <SearchBar />
                </row>
            </container>
        </section>
        <section className='pt-0'>
            <container>
                <row>
                    tourData?.map(tour=><col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></col>)
                    <col lg='12'>
                    
                    </col>
                </row>
            </container>
        </section>
    </>
}
export default Tours