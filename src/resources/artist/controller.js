const prisma = require("../../utils/database");

const createArtist = async (req, res) => {
  const { firstName, lastName, exhibitionId } = req.body;

  try {
    const createdArtist = await prisma.artist.create({
      data: {
        firstName,
        lastName,
      },
    });

    await prisma.exhibitionsOnArtists.create({
      data: {
        exhibitionId: parseInt(exhibitionId),
        artistId: parseInt(createdArtist.id),
      },
    });

    res.json({ data: createdArtist });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { createArtist };
