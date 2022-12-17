import Moment from 'moment'; 

const Footer = () => {
    return ( 
        <footer>
            <div>
                <h2>Blogger &copy; {Moment().format('YYYY')}</h2>
            </div>
        </footer>
     );
}
 
export default Footer;