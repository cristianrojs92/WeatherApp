/**
 * @desc Dependencias
 */
import styled from "styled-components";

/**
 * Componentes
 */
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

/**
 * @desc WeatherCard
 */
export const WeatherCard = styled(Card)`
    margin: 20px;
    height: 230px;
    width: 50%;
`;

/**
 * @desc WeatherContainer
 */
export const WeatherContainer = styled.div`
    margin: 10px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

/**
 * @desc Header
 */
export const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

/**
 * @desc Body
 */
export const Body = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: row;
    height: 200px;
    justify-content: center;
`;

/**
 * @desc WeatherLogo
 */
export const WeatherLogo = styled.img`
    height: 100px;
    display: flex;
    justify-content: center;
`;

/**
 * @desc NameCity
 */
export const NameCity = styled(Typography)`
    width: 500px;
    margin-bottom: -3px !important;
`;

/**
 * @desc Description
 */
export const Description = styled(Typography)`
    width: 500px;
    margin-left: 20px !important;
    margin-top: 2px !important;
`;

/**
 * @desc TempBody
 */
export const TempBody = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

/**
 * @desc TempContainer
 */
export const TempContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-content: center;
`;


/**
 * @desc Temp
 */
export const Temp = styled(Typography)`
    margin-top: 25px !important;
`;

/**
 * @desc InfoContainer
 */
export const InfoContainer = styled.div`
    width: 35%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
`;

/**
 * @desc Info
 */
export const Info = styled(Typography)`
`;





