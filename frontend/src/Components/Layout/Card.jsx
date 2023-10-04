import {Button, IconButton} from "@material-tailwind/react";

const Card = ({ name, image, capacity, fuel, drive, date, rent }) => {
    return (
        <>
            <div className="cursor-default ml-3 mt-5 w-[330px] h-[420px] flex items-center justify-center border-white border shadow-xl bg-[#f4f4fd] rounded-md">
                <div className="w-[95%] h-[95%] rounded-md flex flex-col justify-evenly">
                    <div className="w-full h-[55%] overflow-hidden rounded-lg">
                        <img className="w-full h-full" src={image} alt="" />
                    </div>
                    <div className="w-full h-[28%] flex flex-col justify-between">
                        <div className="w-full h-[45%] flex items-center justify-between">
                            <p className="text-xl">{name}</p>
                            <div className="w-[15%] h-[60%] rounded-full border-dashed border-blue-400 border flex items-center justify-center">
                                <p className="text-sm">{date}</p>
                            </div>
                        </div>
                        <div className="w-full h-[50%] flex flex-wrap border-b-[1px] border-t-blue-gray-100">
                            <div className="w-[45%] h-[50%] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#20aaee" viewBox="0 0 256 256"><path d="M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z" opacity="0.2"></path><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
                                <p className="text-sm ml-3">{capacity} People</p>
                            </div>
                            <div className="w-[45%] h-[50%] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#20aaee" viewBox="0 0 256 256"><path d="M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z" opacity="0.2"></path><path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z"></path></svg>
                                <p className="text-sm ml-3">{fuel}</p>
                            </div>
                            <div className="w-[45%] h-[50%] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#20aaee" viewBox="0 0 256 256"><path d="M222.4,145.55A96.6,96.6,0,0,1,218.54,160h-53a8,8,0,0,0-7.5,5.19l-21.9,58.47c-2.69.22-5.41.34-8.15.34s-5.5-.12-8.2-.35L97.94,165.2a8,8,0,0,0-7.49-5.2h-53a96.6,96.6,0,0,1-3.86-14.45,128,128,0,0,1,188.8,0Z" opacity="0.2"></path><path d="M128,152a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm104-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM40,128v.33a135.93,135.93,0,0,1,176,0V128a88,88,0,0,0-176,0Zm67.5,85.58L90.45,168H49.63A88.35,88.35,0,0,0,107.5,213.58ZM128,216c.83,0,1.66,0,2.49,0l20.07-53.57a16.07,16.07,0,0,1,15-10.39h47.12c.38-1.31.72-2.64,1-4a120,120,0,0,0-171.4,0c.31,1.34.65,2.67,1,4H90.45a16.08,16.08,0,0,1,15,10.4l20,53.56C126.31,216,127.15,216,128,216Zm78.37-48H165.55l-17.09,45.59A88.34,88.34,0,0,0,206.37,168Z"></path></svg>
                                <p className="text-sm ml-3">{drive}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[13%] flex justify-between">
                        <div className="w-[40%] h-full whitespace-nowrap flex items-center">
                            <p className="text-xl">$ {rent}<span className="text-sm"> / month</span></p>
                        </div>
                        <div className="w-[55%] h-full flex items-center justify-evenly">
                            <IconButton className="w-[40px] h-[40px] flex items-center justify-center outline-none border-none bg-blue-200" variant="outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#20aaee" viewBox="0 0 256 256"><path d="M232,94c0,66-104,122-104,122S24,160,24,94A54,54,0,0,1,78,40c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,94Z" opacity="0.2"></path><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path></svg></IconButton>
                            <Button color="blue">Rent Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;