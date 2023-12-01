import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from "uuid";


interface Props {
    searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
    return (
        // <div>
        //     <Card companyName='APPLE' ticker='AAPL' price={400} />
        //     <Card companyName='MICROSOFT' ticker='AAPL' price={43300} />
        //     <Card companyName='TESLA' ticker='AAPL' price={403330} />

        // </div>
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return <Card id={result.symbol} searchResult={result} key={uuidv4()} />
                })
            ) : (
                <h1>No results</h1>
            )}
        </>
    );
};

export default CardList