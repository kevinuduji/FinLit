'use client'

import {useRouter} from "next/navigation";
import Credit from '../components/Credit'

const viewCredit = () => {
    const router = useRouter();

    return(
        <>
        <div className="base">
            <Credit credit_score={100}></Credit>
        </div>
        <div>
            <h1>Credit</h1>
            <h2>What Is A Credit Score:</h2>
            <p>A credit score is a numerical representation of an individual's creditworthiness derived from their credit history and current financial behavior. Typically ranging from 300 to 850, this score is calculated based on factors such as payment history, credit utilization, length of credit history, types of credit accounts, and recent credit inquiries. Lenders, landlords, and even employers use credit scores to assess the risk of lending money, leasing property, or hiring a potential employee. A high credit score indicates a lower risk, often leading to more favorable loan terms, lower interest rates, and increased financial opportunities.</p>
        </div>
        </>
    );
}

export default viewCredit;