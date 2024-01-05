<template>
  <div class="index">
    <div class="file_upload_box">
      <input
        name="请上传文件"
        type="file"
        ref="uploadRef"
        @change="handleChange"
        :multiple="$props.multiple"
        :accept="$props.accept"
      />
      <a href="#none" @click="handleUpload()">上传文件</a>
    </div>
    <div ref="uploadSubmit" @click="handleUpload()">上传</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, onMounted } from 'vue';
import { TaskQueue } from '../common/utils';
const worker = new Worker(new URL('./test.ts', import.meta.url));

interface Props {
  multiple: boolean;
  accept: string;
}

const props = defineProps<Props>();

const uploadRef = ref<HTMLInputElement | null>(null);

const sectionSize = ref(1024 * 1024 * 1);

const queue = new TaskQueue(5);

const hanldeClick = () => {
  //
};

const handleChange = () => {
  const fileInput = uploadRef.value;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const file = fileInput!.files![0];
  if (file) {
    const fileList = fileSection(file);
    getFile(file);
    if (fileList.length) {
      //
    }
    console.log('🚀 ~ file: test.vue:42 ~ handleChange ~ fileList:', fileList);
  }
};

const fileSection = (file: any) => {
  const chuncks: any = [];
  let start = 0;
  let end;
  while (start < file.size) {
    end = Math.min(start + sectionSize.value, file.size);
    chuncks.push({
      fileChuncks: file.slice(start, end),
      fileName: file.name,
    });
    start = end;
  }
  return chuncks;
};

const getFile = (file: any) => {
  return new Promise((r, j) => {
    const fileInfo = new FileReader();
    fileInfo.readAsArrayBuffer(file);
    fileInfo.onload = (e: any) => {
      console.log(e.target.result)
      worker.postMessage({
        fileResult: e.target.result
      });
      worker.onmessage = ({ data: { fileMd5 } }) => {
        console.log(fileMd5, 'fileMd5');
      };
      // const fileMd5 = SparkMD5.ArrayBuffer.hash(e.target.result);
      // console.log("🚀 ~ file: HelloWorld.vue:76 ~ returnnewPromise ~ fileMd5:", fileMd5)
      r(fileInfo.result);
    };
  });
};

const handleUpload = () => {
  //
};

onMounted(async () => {


  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 2"), 200)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 3"), 1000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 4"), 1000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 5"), 1000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 6"), 2000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 7"), 2000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 8"), 2000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 9"), 2000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 10"), 2000)))
  // queue.addTask(() => new Promise(resolve => setTimeout(() => resolve("Task 11"), 1000)))
});
</script>

<style scoped lang="less">
.index {
  margin-left: 20px;
  margin-top: 20px;
}
.file_upload_box {
  display: inline-block;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.file_upload_box input[type='file'] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  line-height: 60px;
  opacity: 0;
  cursor: pointer;
}
.file_upload_box a {
  display: inline-block;
  width: 100%;
  line-height: 45px;
  text-align: center;
  font-family: 'Microsoft yahei';
  background-color: #f60;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}
</style>
