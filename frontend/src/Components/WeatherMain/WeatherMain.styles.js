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
 * @desc WeatherContainer
 */
export const WeatherContainer = styled(Card)`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 230px;
    width: 50%;
`;

/**
 * @desc WeatherHeader
 */
export const WeatherHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

/**
 * @desc WeatherContent
 */
export const WeatherContent = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: row;
    height: 200px;
`;

/**
 * @desc WeatherFooter
 */
export const WeatherFooter = styled.div`
    display: flex;
    flex-direction: row;
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
 * @desc NameCoutry
 */
export const NameCoutry = styled(Typography)`
    width: 500px;
`;

/**
 * @desc WeatherTemp
 */
export const WeatherTemp = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: row;
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
 * @desc WeatherInfo
 */
export const WeatherInfo = styled.div`
    width: 50%;
    height: 100px;
`;

/**
 * @desc Info
 */
export const Info = styled(Typography)`
`;





