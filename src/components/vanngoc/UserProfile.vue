<template>
  <a-descriptions title="User Info" bordered>
    <a-descriptions-item label="Sản phẩm">Cloud Database</a-descriptions-item>
    <a-descriptions-item label="Hình thức thanh toán">Trả trước</a-descriptions-item>
    <a-descriptions-item label="Tự động thay đổi">Có</a-descriptions-item>
    <a-descriptions-item label="Thời gian phục vụ">2018-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Thời gian sử dụng" :span="2">2019-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Trạng thái" :span="3">
      <a-badge status="processing" text="Running" />
    </a-descriptions-item>
    <a-descriptions-item label="Số tiền thương lượng">$80.00</a-descriptions-item>
    <a-descriptions-item label="Chiết khấu">$20.00</a-descriptions-item>
    <a-descriptions-item label="Thành tiền">$60.00</a-descriptions-item>
    <a-descriptions-item label="Thông tin cấu hình">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </a-descriptions-item>
  </a-descriptions>
</template>