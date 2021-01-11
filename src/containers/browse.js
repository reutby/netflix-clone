/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { Header, Loading, Card } from '../components';
import SelectProfileContainer from '../containers/profiles';
import FooterContainer from "./footer";
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
// eslint-disable-next-line react/prop-types
export default function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series');
    const { firebase } = useContext(FirebaseContext);
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    
    const user = firebase.auth().currentUser || {};
    console.log('user', user.displayName);
    useEffect(() => {
        console.log('profile', profile);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(()=>{
        setSlideRows(slides[category])
    },[slides,category]);

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={profile.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src={'joker1'} dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo
                            to={ROUTES.HOME}
                            alt="netflix"
                            src={logo}
                        />
                        <Header.TextLink active = {category ==='series'? 'true' : 'false'}
                        onClick={()=>setCategory('series')}>Series</Header.TextLink>
                        <Header.TextLink active = {category ==='films'? 'true' : 'false'}
                        onClick={()=>setCategory('films')}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>
                                        {user.displayName}
                                    </Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink
                                        onClick={() =>
                                            firebase.auth().signOut()
                                        }
                                    >
                                        Sign out
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>
                        Watch Joker Now
                    </Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in the crowd, failed comadian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his dat
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
            {slideRows.map((slideItem)=>(
                <Card key = {`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map((item)=>(
                            <Card.Item key={item.docId} item={item}>
                                <Card.Image src = {`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                <Card.Meta>
                                    <Card.SubTitle>{item.title}</Card.SubTitle>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category = {category}>
                        
                    </Card.Feature>
                </Card>
            ))}
              
            </Card.Group>
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}