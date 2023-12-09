import React, { useEffect } from "react";

function Title(ttl) {
    useEffect(() => {
        document.title = ttl;
    }, []);
}

export default Title;