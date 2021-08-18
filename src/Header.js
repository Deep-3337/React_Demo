
import Navlink from "./Navlink";
import Service from "./Service";

function Header(props) {

    const services=[
        {
            title: 'Web Development',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga dignissimos doloremque hic quidem rem harum consequuntur perspiciatis reprehenderit molestiae voluptatum debitis repellat inventore ex alias, perferendis corrupti reiciendis eaque?',
            image: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
        },
        {
            title: 'App Development',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga dignissimos doloremque hic quidem rem harum consequuntur perspiciatis reprehenderit molestiae voluptatum debitis repellat inventore ex alias, perferendis corrupti reiciendis eaque?',
            image: 'https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg'
        },
        {
            title: 'Game Developer',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga dignissimos doloremque hic quidem rem harum consequuntur perspiciatis reprehenderit molestiae voluptatum debitis repellat inventore ex alias, perferendis corrupti reiciendis eaque?',
            image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191206194406/Tips-For-an-Indie-Game-Developer.png'
        },
        {
            title: 'Full Stack Developer',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga dignissimos doloremque hic quidem rem harum consequuntur perspiciatis reprehenderit molestiae voluptatum debitis repellat inventore ex alias, perferendis corrupti reiciendis eaque?',
            image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png'
        },
        {
            title: 'Back end Developer',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga dignissimos doloremque hic quidem rem harum consequuntur perspiciatis reprehenderit molestiae voluptatum debitis repellat inventore ex alias, perferendis corrupti reiciendis eaque?',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqybaLOYnvX1mNIV-ITWhKfqwotD14WwJ5XA&usqp=CAU'
        }
    ]
    return (
        <div>
            <h1 style={{marginLeft:"15%"}}>All Services</h1>
            <div className="container">
                {
                    services.map((service, index)=>(
                        <Service key={index} title={service.title} desc={service.desc} image={service.image} />
                    ))
                }
            </div>
        </div>
    )
}

export default Header;