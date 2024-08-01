import React, { useEffect, useState, useRef } from 'react';
import { ReportDescriptions } from '../../../constants/ReportDescriptions/ReportDescription';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  MEASUREMENT_ICON_PATH,
  GOVERNANCE_ICON_PATH,
  CULTURE_ICON_PATH,
  CUSTOMER_ICON_PATH,
  SERVICE_DESIGN_ICON_PATH
} from '../../../constants/Icons/Icons';
import './style.scss'
function ReportLayout() {
  const assessment = useSelector(state => state.assessment);
  const [categoryData, setCategoryData] = useState([]);
  const [overallAverage, setOverallAverage] = useState(null); // State for overall average score
  const [totalUniqueCategories, setTotalUniqueCategories] = useState(0); // State for number of unique categories
  const PdfContent = useRef(null);

  useEffect(() => {
    console.log(ReportDescriptions);
    if (assessment) {
      const categories = [...new Set(assessment.questions.map(question => question.category))]; // Extract subcategories
      const data = categories.map(category => {
        const categoryQuestions = assessment.questions.filter(question => question.category === category);
        const totalQuestions = categoryQuestions.length;

        if (totalQuestions > 0) {
          const selectedOptionsSum = categoryQuestions.reduce((accumulator, question) => {
            return accumulator + question.selectedOption;
          }, 0);
          const averageScore = selectedOptionsSum / totalQuestions;

          return {
            category,
            averageScore,
            totalQuestions
          };
        } else {
          return {
            category,
            averageScore: null,
            totalQuestions: 0
          };
        }
      });

      // Calculate overall average score
      let totalScoreSum = 0;
      let totalQuestionsCount = 0;

      data.forEach(category => {
        if (category.averageScore !== null) {
          totalScoreSum += category.averageScore * category.totalQuestions;
          totalQuestionsCount += category.totalQuestions;
        }
      });

      const overallAverageScore = totalScoreSum / totalQuestionsCount;

      setCategoryData(data);
      console.log(data);
      setTotalUniqueCategories(categories.length);
      setOverallAverage(overallAverageScore);
    }
  }, [assessment]);
  const formatScore = (average) => {
    if (typeof average !== 'number' || isNaN(average)) {
      return average;
    }

    if (Number.isInteger(average)) {
      return average; // No decimal places needed
    } else {
      return average.toFixed(1); // One decimal place
    }
  };

  const downloadPdf = () => {
    if (!PdfContent.current) return;

    html2canvas(PdfContent.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('section.pdf');
    });
  }
  return (
    assessment.isAssessmentTaken && (
      <div className='bg-white d-flex flex-column pt-5 ' >
        <div className='px-5' >
          <div className='  px-5 text-end mx-auto button-container  '  >
            <button type= 'button' className='self-align-end border-0 mt-2  bg-white p-1   ' onClick={downloadPdf} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg></button>
          </div>
        </div>
        <div className='bg-white report-container px-5 pb-5' ref={PdfContent} >
          <div className='report-content mx-auto p-5 d-flex flex-column'   >
            <div className='p-5 bg-white col-7 mx-auto ' >
              <h3 className='fw-bold fs-4 text-center'>Your Overall Maturity Rating: </h3>
              <h3 className='fw-bold fs-4 text-center my-2'>{formatScore(overallAverage)}/{totalUniqueCategories} </h3>
              <h3 className=' fs-5 text-center'>{ReportDescriptions.overallScore[Math.max(0, parseInt(Math.round(overallAverage)) - 1)].name} </h3>
            </div>
            < div className="overallscore-levels" >
              {/* level 5 */}
              <div className='level5   d-flex my-3'>
                <div className={` ${Math.max(0, parseInt(Math.round(overallAverage))) === 5 ? 'level-number text-white' : ''}  col-1 text-center  p-2`} >
                  <small>LEVEL</small>
                  <h3 className='fs-2 fw-bold' >5</h3>
                </div>
                <div className={` ${Math.max(0, parseInt(Math.round(overallAverage))) === 5 ? 'level-name  text-white' : ''} text-end col-2 justify-content-center align-items-center d-flex py-2 pe-2 `} >
                  <small className='fw-bold' > Customer-Centric </small>
                </div>
                <div className='level-description py-2 px-3' >
                  <small>These projects deliver exceptional services to meet defined customer needs. Continuous monitoring, guided by customer data, informs ongoing development.</small>
                </div>
              </div>
              {/* level4 */}
              <div className='level4  d-flex my-3 ' >
                <div className={` ${Math.max(0, parseInt(Math.round(overallAverage))) === 4 ? 'level-number text-white' : ''}   col-1 text-center p-2`} >
                  <small>LEVEL</small>
                  <h3 className='fs-2 fw-bold' >4</h3>
                </div>
                <div className={`${Math.max(0, parseInt(Math.round(overallAverage))) === 4 ? 'level-name  text-white' : ''} text-end col-2 justify-content-center align-items-center d-flex py-2 pe-2 `} >
                  <small className='fw-bold' >Foundational</small>
                </div>
                <div className='level-description  py-2  px-3' >
                  <small>These projects offer cohesive, high-impact experiences informed by customer data and insights, guiding decisions and actions.</small>
                </div>
              </div>


              {/* level3 */}
              <div className='level3 d-flex my-3 ' >
                <div className={` ${Math.max(0, parseInt(Math.round(overallAverage))) === 3 ? 'level-number text-white' : ''}   col-1 text-center p-2 `} >
                  <small>LEVEL</small>
                  <h3 className='fs-2 fw-bold'  >3</h3>
                </div>
                <div className={`${Math.max(0, parseInt(Math.round(overallAverage))) === 3 ? 'level-name  text-white' : ''} text-end col-2 justify-content-center align-items-center d-flex p-2 px-2 `} >
                  <small className='fw-bold' >Strategic</small>
                </div>
                <div className='level-description  py-2 px-3' >
                  <small>In these projects, decisions are guided by customer research to concurrently optimize multiple customer touchpoints, rather than individually addressing them.</small>
                </div>
              </div>

              {/* level2 */}
              <div className='level2 d-flex my-3   ' >
                <div className={` ${Math.max(0, parseInt(Math.round(overallAverage))) === 2 ? 'level-number text-white' : ''}   col-1 text-center py-2`} >
                  <small>LEVEL</small>
                  <h3 className='fs-2 fw-bold' >2</h3>
                </div>
                <div className={`${Math.max(0, parseInt(Math.round(overallAverage))) === 2 ? 'level-name  text-white' : ''} text-end col-2 justify-content-center align-items-center d-flex p-2 px-2 `} >
                  <small className='fw-bold' >Tactical</small>
                </div>
                <div className='level-description  py-2 px-3' >
                  <small>These projects often appear disjointed to customers, with some design decisions for individual touchpoints informed by customer data and insights.</small>
                </div>
              </div>

              {/* level1 */}
              <div className='level1  d-flex my-3  ' >
                <div className={` ${Math.max(0, parseInt(Math.round(overallAverage))) === 1 ? 'level-number text-white' : ''}   col-1 text-center p-2 `} >
                  <small>LEVEL</small>
                  <h3 className='fs-2 fw-bold' >1</h3>
                </div>
                <div className={`${Math.max(0, parseInt(Math.round(overallAverage))) === 1 ? 'level-name  text-white' : ''} text-end col-2 justify-content-center align-items-center d-flex p-2 px-2 `} >
                  <small className='fw-bold' >Reactive</small>
                </div>
                <div className='level-description py-2 px-3' >
                  <small>These projects react to customer problems independently and often lack decisions informed by customer feedback and data.</small>
                </div>
              </div>
            </div>
            {categoryData.length > 0 && (
              <div className='categories mt-5 p-2 gap-2' >

                <div className=' category1 my-5 d-flex justify-content-center align-items-center' >
                  <div className='col-2' >
                    <img
                      src={MEASUREMENT_ICON_PATH}
                      className="img-fluid rounded-top"
                      alt=""
                    />
                  </div>
                  <div className='col-2' >
                    <h3 className='text-center fs-2 '  >   {formatScore(categoryData[0]?.averageScore)}/{categoryData[0]?.totalQuestions}</h3>
                  </div>
                  <div className='col-8 text-secondary' >
                    <h3 className='text-black' >Measurement</h3>
                    <p>Collecting and analyzing data for customer-experience-related outcomes</p>
                    <p className='mb-1' >What your score means: </p>
                    <p>{ReportDescriptions[categoryData[0]?.category][parseInt(Math.round(parseFloat(categoryData[0]?.averageScore)) - 1)]}</p>
                  </div>
                </div>

                <div className='category2 my-5 d-flex justify-content-center align-items-center' >
                  <div className='col-2' >
                    <img
                      src={GOVERNANCE_ICON_PATH}
                      className="img-fluid rounded-top"
                      alt=""
                    />

                  </div>
                  <div className='col-2' >
                    <h3 className='text-center fs-2' >   {formatScore(categoryData[1]?.averageScore)}/{categoryData[1]?.totalQuestions}</h3>
                  </div>
                  <div className='col-8 text-secondary'>
                    <h3 className='text-black' >Governance and Strategy</h3>
                    <p>Institutionalizing CX by holding agency leaders accountable, defining processes and aligning business initiatives </p>
                    <p className='mb-1 ' >What your score means: </p>
                    <p  >{ReportDescriptions[categoryData[1].category][parseInt(Math.round(parseFloat(categoryData[1]?.averageScore)) - 1)]}</p>
                  </div>
                </div>


                <div className='category3 my-5 d-flex justify-content-center align-items-center' >
                  <div className='col-2' >
                    <img
                      src={CULTURE_ICON_PATH}
                      className="img-fluid rounded-top"
                      alt=""
                    />

                  </div>
                  <div className='col-2' >
                    <h3 className='text-center  fs-2' >  {formatScore(categoryData[2]?.averageScore)}/{categoryData[2]?.totalQuestions}</h3>
                  </div>
                  <div className='col-8 text-secondary' >
                    <h3 className='text-black' >Culture and Organization</h3>
                    <p>Hiring CX experts and supporting human-centered design (HCD) tools and processes </p>
                    <p className='mb-1 ' > What your score means: </p>
                    <p>{ReportDescriptions[categoryData[2].category][parseInt(Math.round(parseFloat(categoryData[2]?.averageScore)) - 1)]}</p>
                  </div>
                </div>


                <div className='category4  my-5 d-flex justify-content-center align-items-center' >
                  <div className='col-2' >
                    <img
                      src={CUSTOMER_ICON_PATH}
                      className="img-fluid rounded-top"
                      alt=""
                    />
                  </div>
                  <div className='col-2' >
                    <h3 className='text-center fs-2'  >  {formatScore(categoryData[3]?.averageScore)}/{categoryData[3]?.totalQuestions}</h3>
                  </div>
                  <div className='col-8 text-secondary ' >
                    <h3 className='text-black' > Customer Understanding</h3>
                    <p>Collecting qualitative and quantitative data about customer needs and customer journeys  </p>
                    <p className='mb-1 ' >What your score means: </p>
                    <p>{ReportDescriptions[categoryData[3].category][parseInt(Math.round(parseFloat(categoryData[3]?.averageScore)) - 1)]}</p>
                  </div>
                </div>


                <div className='category5 my-5 d-flex justify-content-center align-items-center' >
                  <div className='col-2' >
                    <img
                      src={SERVICE_DESIGN_ICON_PATH}
                      className="img-fluid rounded-top"
                      alt=""
                    />

                  </div>
                  <div className='col-2' >
                    <h3 className='text-center fs-2'  >  {formatScore(categoryData[4]?.averageScore)}/{categoryData[4]?.totalQuestions}</h3>
                  </div>
                  <div className='col-8 text-secondary' >
                    <h3 className='text-black' >Service Design and Improvement</h3>
                    <p>Fixing broken services and introducing new ones, always with customers and their needs at the center of development  </p>
                    <p className='mb-1 ' >What your score means: </p>
                    <p>{ReportDescriptions[categoryData[4].category][parseInt(Math.round(parseFloat(categoryData[4]?.averageScore)) - 1)]}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    )
  );
}

export default ReportLayout;
