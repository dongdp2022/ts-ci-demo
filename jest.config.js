module.exports = {
  // Sử dụng preset ts-jest để Jest hiểu và chạy được TypeScript
  preset: 'ts-jest',

  // Chạy test trong môi trường Node.js (thường dùng cho backend)
  testEnvironment: 'node',

  // Bật tính năng thu thập thông tin coverage (độ bao phủ code)
  collectCoverage: true,

  // Chỉ thu thập coverage cho các file TypeScript trong thư mục src
  collectCoverageFrom: ['src/**/*.ts'],

  // Thư mục lưu kết quả coverage
  coverageDirectory: 'coverage',
};
