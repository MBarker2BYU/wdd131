
const airTemperature = 76;
const windSpeed = 6;
const degreeSymbol = "\u00B0"

const windChillValue = document.getElementById("windchill");

function calculateWindChill(airTemperature, windSpeed) 
{    
    if (windSpeed < 3 || airTemperature > 50) 
        return airTemperature;

    const exponent = 0.16;
    
    const windChill = 35.74 + (0.6215 * airTemperature) - (35.75 * Math.pow(windSpeed, exponent)) + (0.4275 * airTemperature * Math.pow(windSpeed, exponent));

    return Math.round(windChill);
}

function formatWindChill(airTemperature, windSpeed)
{
    const windchill = calculateWindChill(airTemperature, windSpeed);
    
    if(windchill == airTemperature)
        return "N/A";

    return windchill + degreeSymbol + "F";
}


windChillValue.textContent = formatWindChill(airTemperature, windSpeed);