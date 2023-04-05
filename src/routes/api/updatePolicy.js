const { prisma } = require('../../../prisma/prismaFunction');
const logger = require('../../logger');
module.exports = async (req, res) => {
  console.log('REACH UPDATE INSURANCE: ');
  const body = req.body;
  try {
    const updatedPolicy = {
      ...{ insurerName: body.insurerName },
      ...{ policyNumber: body.policyNumber },
      ...(body.Agent && { Agent: body.Agent }),
      ...(body.homeStreet && { homeStreet: body.homeStreet }),
      ...(body.homeCity && { homeCity: body.homeCity }),
      ...(body.homeCountry && { homeCountry: body.homeCountry }),
      ...(body.homeProvince && { homeProvince: body.homeProvince }),
      ...(body.homePostalCode && { homePostalCode: body.homePostalCode }),
      ...(body.insurer && { insurer: body.insurer }),
      ...(body.businessStreet && { businessStreet: body.businessStreet }),
      ...(body.businessCity && { businessCity: body.businessCity }),
      ...(body.businessCountry && { businessCountry: body.businessCountry }),
      ...(body.businessProvince && { businessProvince: body.businessProvince }),
      ...(body.businessPostalCode && { businessPostalCode: body.businessPostalCode }),
    };

    console.log(updatedPolicy);

    // const vehicle = await prisma.vehicleInformation.findFirst({
    //   where: { licensePlateNo: report.licensePlate },
    // });

    // console.log('Destructured: ', ...updatedPolicy);
    await prisma.insurancePolicy.update({
      where: {
        policyNumber: updatedPolicy.policyNumber,
      },
      data: {
        ...updatedPolicy,
      },
      // updatedPolicy.insurerName,
      // updatedPolicy.policyNumber,
      // updatedPolicy.Agent,
      // updatedPolicy.homeStreet,
      // updatedPolicy.homeCity,
      // updatedPolicy.homeCountry,
      // updatedPolicy.homeProvince,
      // updatedPolicy.homePostalCode,
      // updatedPolicy.insurer,
      // updatedPolicy.businessStreet,
      // updatedPolicy.businessCity,
      // updatedPolicy.businessCountry,
      // updatedPolicy.businessProvince,
      // updatedPolicy.businessPostalCode
    });
  } catch (error) {
    logger.error(error);
    res.status(400).json({ status: 'bad request' });
  }
};
