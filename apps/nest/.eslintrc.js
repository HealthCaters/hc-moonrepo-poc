module.exports = {
  plugins: ['regex'],
  env: {
    node: true,
  },
  rules: {
    'regex/invalid': [
      'error',
      [
        {
          regex: "@Controller\\('\\/",
          replacement: "@Controller('",
        },
        {
          regex: "@Get\\('(?!\\/)",
          replacement: "@Get('/",
        },
        {
          regex: "@Post\\('(?!\\/)",
          replacement: "@Post('/",
        },
        {
          regex: "@Patch\\('(?!\\/)",
          replacement: "@Patch('/",
        },
        {
          regex: "@Put\\('(?!\\/)",
          replacement: "@Put('/",
        },
        {
          regex: "@Delete\\('(?!\\/)",
          replacement: "@Delete('/",
        },
      ],
    ],
  },
};
