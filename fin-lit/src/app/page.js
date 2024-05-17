'use client'

import Credit from './components/Credit'
import TextBox from './components/TextBox'
import List from './components/List'

export default function Home() {
  return (
    <main>
      <div>
        <div className="credit">
          <Credit credit_score={100} />
          <TextBox text={"Recent Transactions:"}/>
          <List text1={"ATM Transaction \n ACCOUNT 0452"}/>
          <List text1={"DOORDASH \n ACCOUNT 0452"}/>
        </div>
      </div>
    </main>
  );
}
