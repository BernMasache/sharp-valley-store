import React, { useEffect, useState } from "react"

import Partner from '../../../components/widgets/partner';
import Cookies from "js-cookie"

function Page() {
    useEffect(() => {
        getPartner()
    })
    const getPartner = () => {
        return Cookies.get("SHA-PARTNER") == undefined ? undefined : JSON.parse(Cookies.get("SHA-PARTNER"))
    }

    return (
        <div>
            <Partner partner={[]} />
        </div>
    );
}

export default Page;
