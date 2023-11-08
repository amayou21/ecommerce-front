import React from "react";
import PrfilePhoto from "../../images/PrfilePhoto.jpeg";
import Mongodb from "../../images/Mongodb.png";
import nodeJs from "../../images/nodeJs.png";
import reactJs from "../../images/reactJs.png";

import { Box, Typography, Grid } from "@mui/material";
// import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { pink, teal } from "@mui/material/colors";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CottageIcon from "@mui/icons-material/Cottage";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LightModeIcon from "@mui/icons-material/LightMode";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import StorageIcon from "@mui/icons-material/Storage";
import JavascriptIcon from "@mui/icons-material/Javascript";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GitHubIcon from "@mui/icons-material/GitHub";

import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import ReplyIcon from "@mui/icons-material/Reply";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import FitbitOutlinedIcon from "@mui/icons-material/FitbitOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import NordicWalkingOutlinedIcon from "@mui/icons-material/NordicWalkingOutlined";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ComputerIcon from "@mui/icons-material/Computer";
const Info = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white", color: "black" }}>
      <Grid
        container
        sx={{ marginTop: "0px", bgcolor: "white", color: "black" }}
      >
        <Grid
          xl={3}
          md={3}
          sx={{ py: "35px" }}
          className="break-words bg-gradient-to-r from-neutral-300 to-stone-400"
        >
          <div>
            <div className="flex flex-col items-center break-words">
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 200, height: 200, bgcolor: "black" }}
              >
                <AccountCircleIcon
                  sx={{ width: 200, height: 200, color: "orange" }}
                />
              </Avatar>
              <Typography variant="h4" color="inhiret" className=" py-5">
                <p className="">أمكار يوسف</p>
              </Typography>
              <Typography variant="h5" color="inhiret">
                <ManageAccountsOutlinedIcon
                  fontSize="large"
                  sx={{ color: teal[500] }}
                />
                21 سنة
              </Typography>
            </div>

            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="flex items-center"
              >
                <BusinessCenterIcon
                  fontSize="small"
                  sx={{ color: teal[500] }}
                />
                <p className="mr-2">مطور معلوماتي</p>
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="flex items-center"
              >
                <CottageIcon
                  fontSize="small"
                  sx={{ color: teal[500], margin: "" }}
                />
                <p className="mr-2">الدار البيضاء، المغرب</p>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="flex items-center"
              >
                <AccountCircleIcon sx={{ fontSize: 40, color: teal[500] }} />
                <p className="ml-2">الملف الشخصي</p>
              </Typography>
              <Typography
                variant="body2"
                color="black"
                className="p-2 outline outline-offset-2 
              outline-[#009688] rounded outline-2 "
              >
                أنا تقني متخصص في تطوير البرمجيات، ولدي خبرة قوية في مجموعة MERN
                التي تُوفر العديد من الأدوات لتطوير وبرمجة التطبيقات والمواقع
                على الويب. أنا ملتزم بالعمل الجماعي حتى عن بُعد، وخارج ساعات
                العمل، أستمتع بمتابعة أحدث اتجاهات التكنولوجيا واكتشاف التقنيات
                الجديدة.
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="flex items-center"
              >
                <LightModeIcon sx={{ fontSize: 40, color: teal[500] }} />
                <p className="ml-2"> أقوى مهاراتي البرمجية</p>
              </Typography>

              <Typography
                variant="body2"
                color="black"
                className="p-2 flex items-center"
              >
                <StorageIcon fontSize="small" sx={{ color: "#4caf50" }} />
                <p className="mr-2"> إستخدام الإطار MongoDB </p>
              </Typography>
              <Typography
                variant="body2"
                color="black"
                className="p-2 flex items-center"
              >
                <JavascriptIcon fontSize="small" sx={{ color: "#ffff00" }} />
                <p className="mr-2">إستخدام الإطار Express Js</p>
              </Typography>
              <Typography
                variant="body2"
                color="black"
                className="p-2 flex items-center"
              >
                <FlipCameraAndroidIcon
                  fontSize="small"
                  sx={{ color: "#00b0ff" }}
                />
                <p className="mr-2">إستخدام الإطار React Js</p>
              </Typography>
              <Typography
                variant="body2"
                color="black"
                className="p-2 flex items-center"
              >
                <ReplyAllIcon fontSize="small" sx={{ color: "#00e676" }} />
                <p className="mr-2">إستخدام الإطار Node Js</p>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="flex items-center"
              >
                <LanguageIcon sx={{ fontSize: 40, color: teal[500] }} />
                <p className="ml-2">اللغات</p>
              </Typography>
              <div>
                <p>العربية </p>
                <div className="mb-2 w-3/4 bg-gray-300 rounded-lg">
                  <div
                    className="bg-teal-500 rounded-lg h-3"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p>الإنجليزية </p>
                <div className="mb-2 w-3/4 bg-gray-300 rounded-lg">
                  <div
                    className="bg-teal-500 rounded-lg h-3"
                    style={{ width: "52.5%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p>الفرنسية</p>
                <div className="w-3/4 bg-gray-300 rounded-lg">
                  <div
                    className="bg-teal-500 rounded-lg h-3"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </div>
        </Grid>

        <Grid
          xl={9}
          md={9}
          sx={{ padding: "50px" }}
          className="break-words bg-gradient-to-r from-neutral-300 to-stone-400"
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="flex items-center"
            >
              <SchoolIcon sx={{ fontSize: 40, color: "#009688" }} />
              <p className="ml-2">التعليم</p>
              <p className="ml-2">OFPPT</p>
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              className="flex items-center"
            >
              <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
              <p className="ml-2">2021 - 2023</p>
            </Typography>
            <Typography
              variant="p"
              color="black"
              component="div"
              className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 "
            >
              حصلت على دبلوم تقني متخصص في تطوير التطبيقات والمواقع على
              الانترنيت Development Digital Option Full-Stack، وأنا قادر على
              العمل في تطويروبرمجة تطبيقات الويب، من الجزء الأمامي (واجهة
              المستخدم) والجزء الخلفي (server side). أنا مؤهل أيضًا بتقنيات
              متعددة.
            </Typography>
          </CardContent>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="flex items-center"
            >
              <PropaneTankIcon sx={{ fontSize: 40, color: "#009688" }} />
              <p className="ml-2">الخبرة المهنية</p>
            </Typography>
            <div>
              {/* <p style={{color:"#c6ff00"}}>Dans le domaine d'informatique</p> */}

              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="flex items-center "
              ></Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="flex items-center"
              >
                <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
                <p className="ml-2"> 15-05-2023 إلى 15-06-2023</p>
              </Typography>
              <Typography
                variant="body2"
                color="black"
                className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 "
              >
                <p>
                  لقد قمت بالعمل كمتدرب لمدة شهر من قبل شركة "وكالة الويب" أثناء
                  قيامها بتطويرموقعها الخاص. في هذه المرحلة، قمت أيضًا بإنشاء
                  موقع ويب لهذه الشركة التي يتيح لها !مكانية تسيير و!دارة
                  خدماتها وتقديمها على الانترنت، في هذا المشروع استخدمت تقنيات
                  HTML وCSS وJavaScript وReactJS وReact-Bootstrap لتطوير موقع
                  الويب الخاص بالشركة.
                </p>
              </Typography>

              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="flex items-center pt-2"
              >
                <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
                <p className="ml-2"> يوليو 2023 - حاليا</p>
              </Typography>

              <Typography
                variant="body2"
                color="black"
                className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 "
              >
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  className="flex items-center "
                >
                  <p className="mt-2">
                    <ReplyIcon sx={{ color: "#795548" }} />
                    الجهة الخلفية للموقع
                  </p>
                </Typography>
                قمت بتطوير الواجهة الخلفية لموقع التجارة الإلكترونية ذلك
                بآستخدام أحدث التقنيات البرمجية مثل NodeJs ,ExpressJS, وقاعدة
                البيانات استخدمت MongoDB وقمت بانجاز API RESTful لجعله مرن وسهل
                التحكم فيه باستخدام تقنيات الواجهة الأمامية.
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  className="mt-2 flex items-center "
                >
                  <p className="mt-2">
                    <ReplyIcon sx={{ color: "#795548" }} />
                    الجهة الأمامية للموقع
                  </p>
                </Typography>
                <p>
                  أثناء تطوير الواجهة الأمامية لموقع التجارة الإلكترونية قمت
                  ببرمجة الصفحات الرئيسية الجذابة، وتطوير صفحة التصنيفات الخاصة
                  بالمنتجات وتسهيل تصفحها،وصفحات المنتجات، ومشاهد المنتجات
                  التفضيلية. لقد قمت أيضًا بإنشاء واجهات مصادقة آمنة لحسابات
                  المستخدمين وصفحات التصفية المتوافقة، باستخدام ReactJS
                  وtailwindcss وMaterial UI، مما أدى إلى تحسين تجربة التسوق عبر
                  الانترن.
                </p>
              </Typography>
            </div>
            
          </CardContent>

          <CardContent >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="flex items-center mt-2"
            >
            <ComputerIcon sx={{ fontSize: 40, color: "#009688" }}  />

              <p className="ml-2">الكفاءات </p>
            </Typography>
            <div class=" outline outline-offset-2 outline-[#009688] rounded outline-2">
              <CardContent>
                <p>لغات البرمجة</p>
                <div className="grid grid-cols-7 gap-1 outline outline-offset-2 outline-orang-500 rounded outline-2 pl-1 mt-2">
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    HTML{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    CSS{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    JavaScript{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    PHP{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    SQL{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center col-span-2 bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    MongoDB{" "}
                  </span>
                </div>
              </CardContent>
              <CardContent>
                <p>إطار أعمال</p>
                <div className="grid grid-cols-7 gap-1 outline outline-offset-2 outline-pik-500 rounded outline-2 pl-1 mt-2">
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    NodeJS{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    ExpressJS{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    ReactJS{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    Laravel{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    Bootstrap{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    tailwindcss{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    Material UI{" "}
                  </span>
                </div>
              </CardContent>
              <CardContent>
                <p>أدوات العمل</p>
                <div className="grid grid-cols-7 gap-1 outline outline-offset-2 outline-pnk-500 rounded outline-2 pl-1 mt-2">
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    Git{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    GitHub
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    Docker{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    Postman
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    VsCode{" "}
                  </span>
                  <span
                    style={{ color: "black" }}
                    className="flex justify-center col-span-2 bg-gradient-to-r from-neutral-300 to-stone-400"
                  >
                    {" "}
                    MongoDBCompass{" "}
                  </span>
                </div>
              </CardContent>
            </div>
            <div className="grid grid-cols-4 gap-4 ml-2"></div>
          </CardContent>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="flex items-center"
            >
              <MedicalInformationOutlinedIcon
                sx={{ fontSize: 40, color: "#009688" }}
              />
              <p className="mt-2 mr-2">كفاءات أخرى</p>
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              className="flex items-center"
            >
              <CalendarMonthIcon fontSize="small" sx={{ color: "#e65100" }} />
              <p className="ml-2"> أبريل 2023</p>
            </Typography>

            <Typography
              variant="body2"
              color="black"
              className="p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 "
            >
              <p>
              لقد حصلت على شهادة Microsoft لبرنامج Word 2016 ولدي أيضًا مهارة قوية في PowerPoint و Canvas.              </p>
            </Typography>
          </CardContent>

          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              className="flex items-center"
            >
              <FitbitOutlinedIcon sx={{ fontSize: 40, color: "#009688" }} />
              <p className="ml-2">الهوايات</p>
            </Typography>

            <Typography
              variant="body2"
              color="black"
              className="flex justify-around p-2 outline outline-offset-2 outline-[#009688] rounded outline-2 "
            >
              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="flex items-center"
              >
                {" "}
                <PoolOutlinedIcon sx={{ fontSize: 40, color: "#01579b" }} />
                <p className="mr-2"> سباحة</p>
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="flex items-center"
              >
                {" "}
                <AutoStoriesOutlinedIcon
                  sx={{ fontSize: 40, color: "#009688" }}
                />
                <p className="mr-2"> قراءة الكتب</p>
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="flex items-center"
              >
                {" "}
                <SportsSoccerOutlinedIcon
                  sx={{ fontSize: 40, color: "#009688" }}
                />
                <p className="mr-2"> كرة القدم</p>
              </Typography>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                className="flex items-center"
              >
                {" "}
                <NordicWalkingOutlinedIcon
                  sx={{ fontSize: 40, color: "#01579b" }}
                />
                <p className="mr-2"> تصلق الجبال</p>
              </Typography>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
