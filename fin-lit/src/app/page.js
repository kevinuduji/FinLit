'use client'

import Credit from './components/Credit'

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="test">This is a home page.</h1>
        <div className="credit">
          <Credit credit_score={100}/>
        </div>
      </div>
    </main>
  );
}
