import Trabajadores from "../model/Trabajadores";

export const renderTasks = async (req, res) => {
  try {
    const Trabajadores = await Trabajadores.find().lean();
    res.render("index", {
      Trabajadores,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export const createTrabajadores = async (req, res, next) => {
  try {
    const Trabajadores = new Trabajadores(req.body);
    await Trabajadores.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const TrabajadoresToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const Trabajadores = await Trabajadores.findById(id);
  Trabajadores.done = !Trabajadores.done;
  await Trabajadores.save();
  res.redirect("/");
};

export const renderTaskEdit = async (req, res, next) => {
  const Trabajadores = await Trabajadores.findById(req.params.id).lean();
  res.render("edit", { Trabajadores });
};

export const editTask = async (req, res, next) => {
  const { id } = req.params;
  await Task.updateOne({ _id: id }, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await Trabajadores.remove({ _id: id });
  res.redirect("/");
};
