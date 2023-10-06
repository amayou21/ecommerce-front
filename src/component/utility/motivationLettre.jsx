import React from 'react';

import { CardContent, Typography } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CottageIcon from '@mui/icons-material/Cottage';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'; import { useTheme } from '@emotion/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const MotivationLettre = ({ entre = 'CGI', date = "05/10/2023", email = 'youssef.mern.dev@gmail.com', phone = "+212 657792431" }) => {
    
    

    const theme = useTheme()

    return (
        <div className='text-black	bg-gradient-to-r from-slate-50 to-slate-50 m-3 p-5'>

            <CardContent className='bg-gradient-to-r from-neutral-300 to-stone-400'>
                <Typography gutterBottom variant="p" component="div" className="flex items-center">
                    <AccountCircleIcon sx={{ color: "#e65100" }} />
                    <p className="ml-2">AMAGUAR Youssef</p>
                </Typography>
                <Typography gutterBottom variant="p" component="div" className="flex items-center">
                    <BusinessCenterIcon fontSize="small" sx={{ color: "#e65100" }} />
                    <p className="ml-2">Développeur Full Stack</p>
                </Typography>
                <Typography gutterBottom variant="p" component="div" className="flex items-center">
                    <CottageIcon fontSize="small" sx={{ color: "#e65100", margin: "" }} />
                    <p className="ml-2">Morroco</p>
                </Typography>
                <Typography gutterBottom variant="p" component="div" className="flex items-center">
                    <PhoneInTalkIcon fontSize="small" sx={{ color: "#e65100" }} />
                    <p className="ml-2"> {phone} </p>
                </Typography>
                <Typography gutterBottom variant="p" component="div" className="flex items-center">
                    <MarkEmailReadIcon fontSize="small" sx={{ color: "#e65100" }} />
                    <p className="ml-2"> {email} </p>
                </Typography>
                <Typography gutterBottom variant="p" component="div" className="flex items-center">
                    <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
                    <p className="ml-2"> {date} </p>
                </Typography>
            </CardContent>
            <CardContent>
                <div className=''>
                    <p>Objet : Candidature au poste de développeur web</p>
                    <p className='my-2'>Madame, Monsieur,</p>
                    <p>Je souhaite vous envoyer ma candidature pour le poste de développeur web dans votre entreprise <span style={{ color: "#009688" }}> {entre}</span>.
                    </p>

                    <div className='my-3'>
                        <p>
                            Diplômé en informatique avec une solide expérience en développement web, je suis passionné par la
                            création de sites internet innovants et fonctionnels. Mon parcours professionnel m'a permis d'acquérir
                            des compétences approfondies en programmation, conception web, et gestion de projets.
                        </p>
                        <p>
                            Mes compétences techniques incluent une maîtrise des langages de programmation tels que HTML, CSS,
                            JavaScript, et NodeJS, ainsi qu'une connaissance approfondie des frameworks populaires tels que
                            ReactJS. De plus, j'ai une solide expérience dans l'intégration de bases de données SQL et NoSQL, ainsi
                            que dans la conception de sites web responsifs et accessibles.
                        </p>

                        <p>
                            Au-delà de mes compétences techniques, je suis également reconnu pour ma capacité à résoudre des
                            problèmes de manière efficace, à collaborer avec des équipes multidisciplinaires, et à respecter les
                            délais impartis. Je suis un professionnel dévoué, axé sur les résultats, qui s'efforce constamment
                            d'améliorer mon compétences et de rester à jour avec les dernières tendances de l'industrie.
                        </p>
                        <p>
                            Je suis convaincu que ma passion pour le développement web, ma solide expertise technique et ma
                            capacité à innover font de moi un candidat idéal pour rejoindre votre équipe de développement. Je suis
                            enthousiaste à l'idée de contribuer à la réalisation des projets passionnants de l'Entreprise.
                        </p>
                        <p>
                            Je me tiens à votre disposition pour discuter en détail de ma candidature et de la manière dont je peux
                            contribuer au succès de votre entreprise. Vous pouvez me contacter par téléphone au <span style={{ color: "#e65100" }}>  {phone}  </span>ou
                            par e-mail à <span style={{ color: "#e65100" }}>  {email} </span>.
                        </p>
                        <p>Je vous remercie pour l'attention que vous portez à ma candidature et j'espère avoir l'opportunité de discuter davantage de ma contribution potentielle à l'entreprise <span style={{ color: "#009688" }}> {entre}</span>.</p>
                        <p className='mt-5'>Cordialement,</p>
                    </div>
                </div>
            </CardContent>
        </div>
    );
}

export default MotivationLettre;
