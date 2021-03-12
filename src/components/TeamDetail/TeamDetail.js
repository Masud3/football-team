import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img from '../../team-tracker/./Photo/./male.png';
import facebook from '../../team-tracker/Icon/Facebook.png';
import twitter from '../../team-tracker/Icon/Twitter.png';
import youTube from '../../team-tracker/Icon/YouTube.png';

const TeamDetail = () => {
    const { id } = useParams();
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    const banner = {
        width: '90%',
        backgroundColor: 'blue',
        height: '300px',
        margin: '0 auto'
    }
    const detailPage = {
        backgroundColor: 'lightcyan',
        height: '100%'
    }
    const icon ={
        height:'30px',
    }
    return (
        <div style={detailPage}>
            <div style={banner} className="row container">
                <div className="col-md-6">
                    <h2>Associació Esportiva Prat</h2>
                    <p>Spanish Segunda División B Group</p>
                    <p>Spanish La Liga</p>
                    <p>Algeciras Club de Fútbol</p>
                </div>
                <div className="col-md-6">
                    <img style={{ height: '250px' }} src={img} alt="" />
                </div>
            </div>

            <div className="container mt-5">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate facilis, iusto consectetur tenetur ut aperiam quae labore perspiciatis cumque iure eum dolorem numquam porro odit minima. Recusandae, laborum. Placeat ipsum ipsa, harum impedit, odio neque molestias deleniti laudantium dolore labore officiis necessitatibus velit sed atque commodi nihil mollitia, sapiente natus? Aut, voluptatum inventore laborum quam error facilis laboriosam cum fugiat id voluptate. Iure officiis tempore ad ullam provident natus eveniet earum sequi sit eum at, molestiae dolores unde dolorem voluptates eos vel animi expedita amet quisquam corporis! Maxime reiciendis minus ex dolores? Eligendi non libero repellendus, laudantium iusto praesentium?</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate facilis, iusto consectetur tenetur ut aperiam quae labore perspiciatis cumque iure eum dolorem numquam porro odit minima. Recusandae, laborum. Placeat ipsum ipsa, harum impedit, odio neque molestias deleniti laudantium dolore labore officiis necessitatibus velit sed atque commodi nihil mollitia, sapiente natus? Aut, voluptatum inventore laborum quam error facilis laboriosam cum fugiat id voluptate. Iure officiis tempore ad ullam provident natus eveniet earum sequi sit eum at, molestiae dolores unde dolorem voluptates eos vel animi expedita amet quisquam corporis! Maxime reiciendis minus ex dolores? Eligendi non libero repellendus, laudantium iusto praesentium?</p>
                </div>
            </div>

            <div className="container text-center">
                <div>
                    <button style={{borderRadius:'50%'}} className="mr-3"><a href="https://facebook.com"><img style={icon} src={facebook} alt="" /></a></button>
                    <button style={{borderRadius:'50%'}} className="mr-3"><a href="https://Twitter.com"><img style={icon} src={twitter} alt="" /></a></button>
                    <button style={{borderRadius:'50%'}} className="mr-3"><a href="https://youtube.com"><img style={icon} src={youTube} alt="" /></a></button>
                </div>
            </div>

        </div>
    );
};

export default TeamDetail;