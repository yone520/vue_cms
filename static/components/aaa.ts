import {ref, watch, nextTick} from 'vue';

const useSettablecolor = (tableData: any) => {
    watch(() => tableData, (newval, oldval) => {
        nextTick(() => {
            const arr = Array.from(document.querySelectorAll('.el-table__footer-wrapper tbody tr td'));
            arr.forEach((item) => {
                if (!Number.isNaN(Number.parseFloat((item as HTMLDivElement).innerText))) {
                    item.setAttribute('style', 'color:red')
                    item.className += ` adddd`
                }
            })
        })
    }, {
        immediate: true,
        deep: true
    })
    return {
    }
}

export default useSettablecolor