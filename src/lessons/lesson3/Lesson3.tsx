import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState([]);

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(response => {
                console.log(response.data.Search)
                const arrayFilms = response.data.Search;
                const renderFilms = arrayFilms.map((item: any) => {
                    return <div>
                        Title : {item.Title}
                        Year : {item.Year}
                        <img src={item.Poster} alt=""/>
                    </div>
                })
                setSearchResult(renderFilms)
            });
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type).then((response) => {
            console.log(response)
            const arrayFilms = response.data.Search;
            const renderFilms = arrayFilms.map((item: any) => {
                return <div>
                    <div>Title : {item.Title}</div>
                    <div>Year : {item.Year}</div>
                    <img src={item.Poster} alt=""/>
                </div>
            })
            setSearchResultByType(renderFilms)
        })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                </div>
            </div>
            {searchResult}
            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;