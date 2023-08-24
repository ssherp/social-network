const { Schema, model } = require('mongoose');
const reactionSchema=require("./Reaction")
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    
    createdAt: {
      type: Date,
      default: Date.now(),
      get:(date)=>date.toLocaleDateString()
    },
    endDate: {
      type: Date,
      // Sets a default value of 12 weeks from now
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    username: [
      {
        type: String,
        required: true,
      },
    ],
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  })
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
