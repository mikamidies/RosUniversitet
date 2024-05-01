<template>
    <li class="accordion__item">
        <div class="accordion__trigger" :class="{ accordion__trigger_active: visible }" @click="open">
            <slot name="accordion-trigger"></slot>
            <div class="chevron" :class="{ rotate: visible }">
                <chevron-down />
            </div>
        </div>

        <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
            <div v-show="visible" class="accordion__content">
                <ul>
                    <slot name="accordion-content"></slot>
                </ul>
            </div>
        </transition>
    </li>
</template>

<script>
import ChevronDown from './SvgIcons/ChevronDown.vue'
/* eslint-disable */

export default {
    components: { ChevronDown },
    inject: ['Accordion'],
    props: {},
    data() {
        return {
            index: null,
        }
    },
    computed: {
        visible() {
            return this.index == this.Accordion.active
        },
    },
    created() {
        this.index = this.Accordion.count++
    },
    methods: {
        open() {
            if (this.visible) {
                this.Accordion.active = 0
            } else {
                this.Accordion.active = this.index
            }
        },
        start(el) {
            el.style.height = el.scrollHeight + 'px'
        },
        end(el) {
            el.style.height = ''
        },
    },
}
</script>

<style scoped>
.accordion__item {
    cursor: pointer;
    position: relative;
    height: fit-content;
}

.accordion__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    position: relative;
    margin: 0;
}

.accordion__content p,
.accordion__content ul {
    margin: 0;
}

.accordion-enter-active,
.accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
    height: 0 !important;
    opacity: 0;
}

.chevron {
    transition: .3s;
}

.chevron.rotate {
    transform: rotate(180deg);
}
</style>