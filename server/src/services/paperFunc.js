import PaperModel from "../models/PaperSchema";

const getPaperPath = async (paperTitle) => {
  const paperDetail = await PaperModel.find({ title: paperTitle });

  return paperDetail.path;
};

export default getPaperPath;
