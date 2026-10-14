// Lucide icons: only the ones the page uses end up in the bundle.
import { createIcons, ArrowRight, ArrowUpRight, Menu, Play, Check, Plus, MessageCircle, Camera } from 'lucide';

const icons = { ArrowRight, ArrowUpRight, Menu, Play, Check, Plus, MessageCircle, Camera };
export const renderIcons = () => createIcons({ icons });

renderIcons();
