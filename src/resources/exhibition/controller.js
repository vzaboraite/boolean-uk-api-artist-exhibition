const prisma = require("../../utils/database");

const createExhibitionWithAddress = async (req, res) => {
  const { street, city, postCode, exhibitions } = req.body;
  const { name, date } = exhibitions;

  try {
    const exhibitionWithAddress = await prisma.address.create({
      data: {
        street,
        city,
        postCode,
        exhibitions: {
          create: {
            name,
            date: new Date(date),
          },
        },
      },
      include: {
        exhibitions: true,
      },
    });

    res.json({ data: exhibitionWithAddress });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { createExhibitionWithAddress };
