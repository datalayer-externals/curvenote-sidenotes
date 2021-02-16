import { AppThunk, SidenotesUIActions } from '../types';
export declare function connectSidenote(docId?: string, sidenoteId?: string, baseId?: string): AppThunk<void>;
export declare function connectAnchor(docId?: string, sidenoteId?: string, element?: HTMLElement): AppThunk<void>;
export declare function connectAnchorBase(docId?: string, anchorId?: string, element?: HTMLElement): AppThunk<void>;
export declare function updateSidenote(docId: string, sidenoteId: string): SidenotesUIActions;
export declare function selectSidenote(docId?: string, sidenoteId?: string): AppThunk<void>;
export declare function selectAnchor(docId?: string, anchor?: HTMLElement | null): AppThunk<void>;
export declare function disconnectSidenote(docId?: string, sidenoteId?: string): AppThunk<void>;
export declare function disconnectAnchor(docId?: string, anchor?: HTMLElement | null): AppThunk<void>;
export declare function deselectSidenote(docId: string): SidenotesUIActions;
export declare function repositionSidenotes(docId: string): SidenotesUIActions;
