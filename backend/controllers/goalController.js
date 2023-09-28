const asyncHandler = require("express-async-handler");

// @description Get Goal
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});
// @description Set Goal
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }

  res.status(200).json({ message: "Set goal" });
});
// @description Update Goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});
// @description Delete Goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
