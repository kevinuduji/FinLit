'use client'

import {useRouter} from "next/navigation";
import Credit from '../components/Credit'

const viewCredit = () => {
    const router = useRouter();

    return(
        <div className="base">
            <Credit credit_score={100}></Credit>
        </div>
    );
}

export default viewCredit;