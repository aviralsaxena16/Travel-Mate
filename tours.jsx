import React, { useState, useEffect } from 'react';
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from 'reactstrap'; 
import "../styles/tour.css";
import SearchBar from "../components/SearchBar"; // Import your component correctly
import TourCard from "../components/TourCard"; // Import your component correctly
import NewsLetter from "../components/NewsLetter"; // Import your component correctly
import TourData from "../data/TourData"; // Import your data file correctly

const Tours = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const pages = Math.ceil(TourData.length / 4); // Assuming 4 tours per page
        setPageCount(pages);
    }, []);

    return (
        <>
            <CommonSection title="All Tours" /> {/* Fixed JSX */}
            <section>
                <Container> {/* Corrected capitalization */}
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container> {/* Corrected capitalization */}
                    <Row>
                        {TourData?.slice(page * 4, (page + 1) * 4).map((tour) => ( // Paginate tours
                            <Col lg="3" className="mb-4" key={tour.id}>
                                <TourCard tour={tour} />
                            </Col>
                        ))}
                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map((number) => (
                                    <span
                                        key={number}
                                        onClick={() => setPage(number)}
                                        className={page === number ? "active__page" : ""}
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <NewsLetter />
        </>
    );
};

export default Tours;
