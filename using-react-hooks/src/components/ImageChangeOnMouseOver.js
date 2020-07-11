import React from "react";
import ImageTogglerOnMouseOver from "./ImageTogglerOnMouseOver";


const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageTogglerOnMouseOver primaryImg="../../speakers/bw/Speaker-187.jpg"
                                    secondaryImg="../../speakers/Speaker-187.jpg"
                                    alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageTogglerOnMouseOver primaryImg="../../speakers/bw/Speaker-1124.jpg"
                                    secondaryImg="../../speakers/Speaker-1124.jpg"
                                    alt="" />
                                    &nbsp;&nbsp;&nbsp;
            <ImageTogglerOnMouseOver primaryImg="../../speakers/bw/Speaker-1530.jpg"
                                    secondaryImg="../../speakers/Speaker-1530.jpg"
                                    alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;