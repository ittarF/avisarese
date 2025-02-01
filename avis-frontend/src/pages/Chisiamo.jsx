import React from "react";
import PageWrapper from "../components/PageWrapper";
import Organigramma from "../components/Organigramma";
import ChiSiamoBanner from "../components/ChiSiamoBanner";

function Chisiamo() {

    return (
        <PageWrapper>
            <div className="bg-blue-100">
                <ChiSiamoBanner />
                <div className="container mx-auto text-center py-20">
                    <Organigramma />
                </div>
                
            </div>
        </PageWrapper>
    );
}
    
export default Chisiamo;
