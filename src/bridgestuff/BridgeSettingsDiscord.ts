
/***********************************
 * The BridgeSettingsDiscord class *
 ***********************************/

export interface BridgeSettingsDiscordProperties {
	channelId: string;
	sendUsernames: boolean;
	relayJoinMessages: boolean;
	relayLeaveMessages: boolean;
	crossDeleteOnTelegram: boolean;
	serverId?: string;
}
/**
 * Holds settings for the Discord part of a bridge
 */
export class BridgeSettingsDiscord {
	public channelId: string;
	public sendUsernames: boolean;
	public relayJoinMessages: boolean;
	public relayLeaveMessages: boolean;
	public crossDeleteOnTelegram: boolean;

	/**
	 * Creates a new BridgeSettingsDiscord object
	 *
	 * @param {Object} settings	Settings for the Discord side of the bridge
	 * @param {String} settings.channelId	ID of the Discord channel this bridge is part of
	 * @param {Boolean} settings.relayJoinMessages	Whether or not to relay join messages from Discord to Telegram
	 * @param {Boolean} settings.relayLeaveMessages	Whether or not to relay leave messages from Discord to Telegram
	 *
	 * @throws {Error}	If the settings object does not validate
	 */
	constructor(settings: BridgeSettingsDiscordProperties) {
		BridgeSettingsDiscord.validate(settings);

		/**
		 * ID of the Discord channel this bridge is part of
		 *
		 * @type {String}
		 */
		this.channelId = settings.channelId;

		/**
		 * Whether or not to relay join messages from Discord to Telegram
		 *
		 * @type {Boolean}
		 */
		this.relayJoinMessages = settings.relayJoinMessages;

		/**
		 * Whether or not to relay leave messages from Discord to Telegram
		 *
		 * @type {Boolean}
		 */
		this.relayLeaveMessages = settings.relayLeaveMessages;

		/**
		 * Whether or not to send the user's name as part of the messages to Telegram
		 *
		 * @type {Boolean}
		 */
		this.sendUsernames = settings.sendUsernames;

		/**
		 * Whether or not to delete messages on Telegram when a message is deleted on Discord
		 *
		 * @type {Boolean}
		 */
		this.crossDeleteOnTelegram = settings.crossDeleteOnTelegram;
	}

	/**
	 * Validates a raw settings object, checking if it is usable for creating a BridgeSettingsDiscord object
	 *
	 * @param {Object} settings	The object to validate
	 *
	 * @throws {Error}	If the object is not suitable. The error message says what the problem is
	 */
	static validate(settings: BridgeSettingsDiscordProperties) {
		// Check that the settings are indeed in object form
		if (!(settings instanceof Object)) {
			throw new Error("`settings` must be an object");
		}

		// Check that relayJoinMessages is a boolean
		if (Boolean(settings.relayJoinMessages) !== settings.relayJoinMessages) {
			throw new Error("`settings.relayJoinMessages` must be a boolean");
		}

		// Check that relayLeaveMessages is a boolean
		if (Boolean(settings.relayLeaveMessages) !== settings.relayLeaveMessages) {
			throw new Error("`settings.relayLeaveMessages` must be a boolean");
		}

		// Check that sendUsernames is a boolean
		if (Boolean(settings.sendUsernames) !== settings.sendUsernames) {
			throw new Error("`settings.sendUsernames` must be a boolean");
		}

		// Check that crossDeleteOnTelegram is a boolean
		if (Boolean(settings.crossDeleteOnTelegram) !== settings.crossDeleteOnTelegram) {
			throw new Error("`settings.crossDeleteOnTelegram` must be a boolean");
		}
	}
}
